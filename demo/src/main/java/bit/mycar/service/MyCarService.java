package bit.mycar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import bit.mycar.data.MycarDto;
import bit.mycar.repository.MyCarDao;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyCarService {
    final private MyCarDao dao;

    public List<MycarDto> getAllCars() {
        return dao.getAllDatas();
    }
}
