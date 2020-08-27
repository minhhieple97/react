Note:
+ Sử dụng nhiều function component càng nhiều càng tốt.
+ Cố gắng chia component ra làm 2 loại là Smart Component và Dump component
+ Smart component tập trung xử lý logic, business logic, quản lý state, hạn chế style, thường là container cho nhiều Dump component
+ Dump Component không có state, chỉ nhận props, mục địch đơn thuần chỉ để show, tập trung style ở loại component này.