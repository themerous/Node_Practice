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

    public void uploadCar(MycarDto dto) {
        myCarDaoInter.save(dto);
    }

    public void updateCar(Long id, MycarDto dto) {
        myCarDaoInter.findById(id).map(ndto -> {
            ndto.setCarname(dto.getCarname());
            ndto.setCarcolor(dto.getCarcolor());
            ndto.setCarprice(dto.getCarprice());
            return myCarDaoInter.save(ndto);
        });
    }

    public void deleteCar(Long num) {
        myCarDaoInter.deleteById(num);
    }
}
