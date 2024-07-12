package bit.mycar.data;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "mycar")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MycarDto {
	@Id // 각 엔터티를 구별할 수 있도록 식별 아이디를 가지도록 설계
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long num;
	@Column(name = "carname", length = 30) // name이 변수명과 같을 경우 생략 가능
	private String carname;

	private int carprice;
	@Column(length = 20)
	private String carcolor;
	@Column(length = 20)
	private String carguip;
	@Column(length = 100)
	private String carphoto;
	@CreationTimestamp
	@Column(updatable = false)
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private Timestamp writeday;
	@Transient // 테이블 컬럼으로 생성되지 않고 객체에서만 사용 가능한 멤버변수
	private int commentcount;
	@Transient
	private String message;
}
