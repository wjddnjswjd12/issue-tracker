package com.codesquad.issuetracker.exception;

public class AuthorizationNotFoundException extends RuntimeException {
    public AuthorizationNotFoundException() {
        super("Authorization is not in the request header");
    }

    public AuthorizationNotFoundException(String message) {
        super(message);
    }

    public AuthorizationNotFoundException(Throwable cause) {
        super(cause);
    }
}
