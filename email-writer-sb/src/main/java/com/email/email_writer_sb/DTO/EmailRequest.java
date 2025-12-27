package com.email.email_writer_sb.DTO;

import lombok.Data;

/**
 * DTO for capturing email generation requests.
 */
@Data
public class EmailRequest {

    private String emailContent;
    private String tone;

    // Getter for emailContent
    public String getEmailContent() {
        return emailContent;
    }

    // Setter for emailContent
    public void setEmailContent(String emailContent) {
        this.emailContent = emailContent;
    }

    // Getter for tone
    public String getTone() {
        return tone;
    }

    // Setter for tone
    public void setTone(String tone) {
        this.tone = tone;
    }
}
