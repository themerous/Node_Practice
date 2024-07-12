package bit.mycar.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import bit.mycar.data.MycarDto;
import bit.mycar.service.MyCarService;
import lombok.RequiredArgsConstructor;
import naver.storage.NcpObjectStorageService;

@RestController
@RequiredArgsConstructor
public class MyCarListController {
    final private MyCarService myCarService;
    final private NcpObjectStorageService storageService;

    private String bucket = "jpa-practice";
    private String folder = "test-bucket";

    @GetMapping("/mycar/list")
    public List<MycarDto> list() {
        return myCarService.getAllCars();
    }
}
