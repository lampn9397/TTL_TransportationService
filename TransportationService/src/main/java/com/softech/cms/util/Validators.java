package com.softech.cms.util;

public class Validators {

	public static final String USERNAME_REGEX = "[^:&^#\\.~@!%*$ ]{5,20}$";
	public static final String PASSWORD_REGEX = "[^:&^#\\.~@!%*$_ ]{7,20}$";
	public static final String EMAIL_REGEX = "[^:&^#~!%*$ ][\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
	
	
}
