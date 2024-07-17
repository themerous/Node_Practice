package bit.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import bit.board.data.BoardDto;

public interface BoardDaoInter extends JpaRepository<BoardDto, Long> {
    // 강사님 방식
    // @Query(value = """
    // update reactboard set writer=:#{#dto.writer},
    // subject=:#{#dto.subject}, content=:#{#dto.content}
    // where board_num=:#{#dto.boardNum}
    // """, nativeQuery = true)
    // public void updateBoardNoPhoto(@Param("dto") BoardDto dto);

    @Query(value = """
            update reactboard set readcount = readcount + 1
            where board_num=:boardNum
            """, nativeQuery = true)
    public void updateBoardReadcount(@Param("boardNum") Long boardNum);

    @Query(value = """
            select count(*) from reactboard where board_num=:boardNum and pass=:pass
            """, nativeQuery = true)
    public int passwordCheck(@Param("boardNum") Long boardNum, @Param("pass") String pass);
}
