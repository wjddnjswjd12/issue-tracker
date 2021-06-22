package com.codesquad.issuetracker.exception;

public class UserNotFoundException extends NotFoundException{
    public UserNotFoundException() {
        super("찾을 수 없는 유저입니다.");
    }
}
