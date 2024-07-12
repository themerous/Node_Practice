package bit.mycar.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import bit.mycar.data.MycarDto;
import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class MyCarDao {
    private MyCarDaoInter myCarDaoInter;

    public List<MycarDto> getAllDatas() {
        return myCarDaoInter.findAll(Sort.by(Sort.Direction.DESC, "num"));
    }
}
