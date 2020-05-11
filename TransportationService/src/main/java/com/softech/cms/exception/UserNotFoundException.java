package com.softech.cms.exception;

public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException() {
		super("Product not found exception !");
	}
}
