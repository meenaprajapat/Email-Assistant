package com.email.email_writer_sb.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.email.email_writer_sb.DTO.EmailRequest;
import com.email.email_writer_sb.Service.EmailService;

@RestController
@RequestMapping("/api/email")
//@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private   EmailService emailService;

    @PostMapping("/generate")
public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest){
        System.out.println("Received request: " + emailRequest.getEmailContent());
        String response = emailService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }

}
