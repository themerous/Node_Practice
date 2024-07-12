package bit.mycar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import bit.mycar.data.MycarDto;

public interface MyCarDaoInter extends JpaRepository<MycarDto, Long> {

}
