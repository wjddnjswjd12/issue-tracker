package com.codesquad.issuetracker.exception;

public class TokenNotValidException extends RuntimeException {
    public TokenNotValidException() {
        super("Token is not valid");
    }

    public TokenNotValidException(String message) {
        super(message);
    }

    public TokenNotValidException(Throwable cause) {
        super(cause);
    }
}
