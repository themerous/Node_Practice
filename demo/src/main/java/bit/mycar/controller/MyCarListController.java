package bit.mycar.controller;

import java.util.List;

import java.util.Map;
import java.util.HashMap;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bit.mycar.data.MycarDto;
import bit.mycar.service.MyCarService;
import lombok.RequiredArgsConstructor;
import naver.storage.NcpObjectStorageService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequiredArgsConstructor
public class MyCarListController {
    final private MyCarService myCarService;
    final private NcpObjectStorageService storageService;

    private String bucket = "jpa-practice";
    private String folder = "test-bucket";

    @PostMapping("/mycar")
    public void uploadCar(
            @RequestBody MycarDto dto) {
        System.out.println("insert dto >> " + dto);
        myCarService.uploadCar(dto);
    }

    @PutMapping("/mycar/{id}")
    public void putMethodName(
            @PathVariable Long id,
            @RequestBody MycarDto dto) {
        myCarService.updateCar(id, dto);
    }

    @DeleteMapping("/mycar/{num}")
    public void deleteCar(@PathVariable Long num) {
        myCarService.deleteCar(num);
    }

    @GetMapping("/mycar/list")
    public List<MycarDto> list() {
        return myCarService.getAllCars();
    }

    @PostMapping("/mycar/photo")
    public Map<String, String> uploadPhoto(
            @RequestParam("upload") MultipartFile upload) {
        String carPhoto = storageService.uploadFile(bucket, folder, upload);
        Map<String, String> map = new HashMap<>();
        map.put("carphoto", carPhoto);
        return map;
    }
}
