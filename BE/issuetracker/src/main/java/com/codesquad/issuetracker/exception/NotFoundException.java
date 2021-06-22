package com.codesquad.issuetracker.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super("Cannot find following element");
    }

    public NotFoundException(String message) {
        super(message);
    }

    public NotFoundException(Throwable cause) {
        super(cause);
    }
}
