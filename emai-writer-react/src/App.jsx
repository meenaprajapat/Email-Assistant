import { useState, useMemo } from 'react';
// import { Brightness4, Brightness7 } from '@mui/icons-material';

import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  Tooltip,
  Fade,
  IconButton,
  createTheme,
  ThemeProvider
} from '@mui/material';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState('light'); // theme toggle

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";
      const response = await axios.post(`${apiBaseUrl}/api/email/generate`, {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#f5faff',
                  paper: '#ffffff'
                },
                primary: {
                  main: '#1976d2'
                }
              }
            : {
                background: {
                  default: '#121212',
                  paper: '#1f1f1f'
                },
                primary: {
                  main: '#90caf9'
                }
              })
        },
        typography: {
          fontFamily: 'Inter, sans-serif'
        }
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 6
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              position: 'relative',
              backgroundColor: 'background.paper'
            }}
          >
            <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
              <Tooltip title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} mode`}>
                <IconButton onClick={toggleTheme} color="primary">
                  {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
              </Tooltip>
            </Box>

            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              ✉️ Email Reply Generator
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={5}
              label="Enter Email Content"
              variant="outlined"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{ mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Tone (Optional)</InputLabel>
              <Select
                value={tone}
                label="Tone"
                onChange={(e) => setTone(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              sx={{ py: 1.5, fontSize: '1rem', fontWeight: 500 }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : '🚀 Generate Reply'}
            </Button>

            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <Fade in={!!generatedReply}>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  ✍️ Generated Reply:
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
                  value={generatedReply}
                  InputProps={{ readOnly: true }}
                />
                <Tooltip title="Copied!" arrow>
                  <Button
                    variant="outlined"
                    onClick={() => navigator.clipboard.writeText(generatedReply)}
                    sx={{ mt: 2 }}
                  >
                    Copy to Clipboard
                  </Button>
                </Tooltip>
              </Box>
            </Fade>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
