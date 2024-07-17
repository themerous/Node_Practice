package bit.board.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import bit.board.data.BoardDto;
import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class BoardDao {
    private BoardDaoInter boardDaoInter;

    // Create
    public void createBoard(BoardDto dto) {
        boardDaoInter.save(dto);
    }

    // Read
    public List<BoardDto> getBoardList() {
        return boardDaoInter.findAll(Sort.by(Sort.Direction.DESC, "boardNum"));
    }

    public BoardDto getBoard(Long boardNum) {
        return boardDaoInter.findById(boardNum).get();
    }

    public int passwordCheck(Long boardNum, String pass) {
        return boardDaoInter.passwordCheck(boardNum, pass);
    }

    // Update
    public void updateBoardNoPhoto(BoardDto dto) {
        boardDaoInter.findById(dto.getBoardNum()).map((data) -> {
            data.setWriter(dto.getWriter());
            data.setSubject(dto.getSubject());
            data.setContent(dto.getContent());
            return boardDaoInter.save(data);
        });
    }

    public void updateBoardPhoto(Long boardNum, String photo) {
        boardDaoInter.findById(boardNum).map((dto) -> {
            dto.setPhoto(photo);
            return boardDaoInter.save(dto);
        });
    }

    public void updateBoardReadcount(Long boardNum) {
        boardDaoInter.updateBoardReadcount(boardNum);
    }

    // Delete
    public void deleteBoard(Long boardNum) {
        boardDaoInter.deleteById(boardNum);
    }
}
