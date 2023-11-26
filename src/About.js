import React from 'react'

const About = () => {
    return (
      <div style={{ textAlign: "left",marginLeft:'0.5rem',flexWrap:'wrap'}}>
        <h1 style={{ color: "#fff", marginTop: "1rem", fontSize: "2rem" }}>
          通用的進位計算方法
        </h1>
        <p style={{ color: "#fff", marginTop: "-1rem", fontSize: "1rem" }}>
          進位計算是在不同進位制度之間轉換數字的重要技能，
 
          以下是一個可以通用於各種進位轉換的方式，
   
          可用於將數字從一個進位制度轉換為另一個
        </p>

        <h1
          style={{
            color: "#fff",
            marginTop: "1rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          1.了解不同進位制的基數
        </h1>
        <p
          style={{
            color: "#fff",
            marginTop: "-1rem",
            fontSize: "1rem",
          }}
        >
          十進位：基數為10，使用數字0-9。
          <br />
          二進位：基數為2，使用數字0和1。
          <br />
          八進位：基數為8，使用數字0-7。
          <br />
          十六進位：基數為16，使用數字0-9和A-F（A代表10，B代表11，以此類推）。
        </p>
        <h1
          style={{
            color: "#fff",
            marginTop: "1rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          2.將原始數字轉換為對應進位制的數字
        </h1>
        <p
          style={{
            color: "#fff",
            marginTop: "-1rem",
            fontSize: "1rem",
          }}
        >
          例如，將十進位數字42轉換為二進位。步驟是將42除以2，得到商21和餘數0，
          <br />
          然後再將21除以2，得到商10和餘數1，一直重複直到商為0。
          <br />
          將所有的餘數反向排列即為二進位表示，所以42的二進位表示為101010。
        </p>
        <h1
          style={{
            color: "#fff",
            marginTop: "1rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          3.將目標進位制的數字轉換為十進位
        </h1>
        <p
          style={{
            color: "#fff",
            marginTop: "-1rem",
            fontSize: "1rem",
          }}
        >
          例如，將二進位數字101010轉換為十進位。這可以通過將每一位數乘以2的冪次方，
          <br />
          然後相加得到。在這個例子中，1*2^5 + 0*2^4 + 1*2^3 + 0*2^2 + 1*2^1 +
          0*2^0 = 32 + 0 + 8 + 0 + 2 + 0 = 42。
        </p>
        <h1
          style={{
            color: "#fff",
            marginTop: "1rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          4.進行進位制之間的轉換
        </h1>
        <p
          style={{
            color: "#fff",
            marginTop: "-1rem",
            fontSize: "1rem",
          }}
        >
          例如，將八進位數字64轉換為十進位。這可以通過將每一位數乘以8的冪次方，然後相加得到。
          <br />
          在這個例子中，6*8^1 + 4*8^0 = 48 + 4 = 52。
        </p>
        <h1 style={{ color: "#fff", marginTop: "2.5rem", fontSize: "1rem" }}>
          這個通用方法可用於在不同進位制度之間進行轉換，只需根據目標進位制度的基數和原始數字的位數進行相應的計算即可。
        </h1>
      </div>
    );
}
 
export default About;