package bit.board.service;

import java.util.List;

import org.springframework.stereotype.Service;

import bit.board.data.BoardCommentDto;
import bit.board.data.BoardDto;
import bit.board.repository.BoardDao;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BoardService {
    private BoardDao dao;

    // Create
    public void createBoard(BoardDto dto) {
        dao.createBoard(dto);
    }

    public void createComment(BoardCommentDto dto) {

    }

    // Read
    public BoardDto getBoard(Long boardNum) {
        return dao.getBoard(boardNum);
    }

    public List<BoardDto> getBoardList() {
        return dao.getBoardList();
    }

    public Boolean passwordCHeck(Long boardNum, String pass) {
        return dao.passwordCheck(boardNum, pass) == 1 ? true : false;
    }

    // Update
    public void updateBoardNoPhoto(BoardDto dto) {
        dao.updateBoardNoPhoto(dto);
    }

    public void updateBoardPhoto(Long boardNum, String photo) {
        dao.updateBoardPhoto(boardNum, photo);
    }

    public void updateBoardReadcount(Long boardNum) {
        dao.updateBoardReadcount(boardNum);
    }

    // Delete
    public void deleteBoard(Long boardNum) {
        dao.deleteBoard(boardNum);
    }
}
