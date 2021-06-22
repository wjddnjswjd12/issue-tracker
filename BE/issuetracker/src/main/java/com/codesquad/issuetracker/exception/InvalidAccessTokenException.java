package com.codesquad.issuetracker.exception;

public class InvalidAccessTokenException extends RuntimeException {
    public InvalidAccessTokenException() {
        super("Access Token is not valid!");
    }

    public InvalidAccessTokenException(String message) {
        super(message);
    }

    public InvalidAccessTokenException(Throwable cause) {
        super(cause);
    }
}
