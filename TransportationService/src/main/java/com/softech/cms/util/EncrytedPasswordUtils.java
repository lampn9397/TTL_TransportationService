package com.softech.cms.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class EncrytedPasswordUtils {
 
    // Encryte Password with BCryptPasswordEncoder
    public static String encrytePassword(String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(password);
    }
    
    public static String MD5(String text) {
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			byte[] messageDigest = md.digest(text.getBytes());

			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < messageDigest.length; i++) {
				sb.append(Integer.toString((messageDigest[i] & 0xff) + 0x100, 16).substring(1));
			}
			return sb.toString();

		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		}
	}
 
    public static void main(String[] args) {
        String password = "123";
        String encrytedPassword = MD5(password);
 
        System.out.println("Encryted Password: " + encrytedPassword);
    }
     
}