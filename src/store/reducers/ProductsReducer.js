const initState = {
    products: [
        {
            id: 1,
            name: 'Vú sữa Lò Rèn - Vĩnh Kim', 
            image: 'Vu_sua_lo_ren.jpg', price: 92000, 
            quantity: 1, 
            desc: "Vú sữa Lò Rèn Vĩnh Kim là một loại trái cây có hương vị ngọt ngào, dịu mát. Thưởng thức trái vú sữa Vĩnh Kim, bạn sẽ cảm nhận được sự thanh ngọt như thuở còn ôm bầu sữa mẹ. Vú sữa loại này có hương thơm thoang thoảng, ai đã từng một lần thưởng thức thì không thể nào quên được. Loại vú sữa này khác hẳn với những giống vú sữa trái vàng, vỏ dày mà chúng ta thường gặp. Bởi sự thơm ngon của nó, Vú sữa Vĩnh Kim đã trở thành món quà quê dân dã mà quý báu để người ta thăm biếu nhau."
        },
        {
            id: 2,
            name: 'Mãng Cầu Bà Đen', 
            image: 'Mang-cau-ba-den.jpg', price: 85000, 
            quantity: 1, 
            desc: "Mãng Cầu Bà Đen là món đặc sản độc đáo của tỉnh Tây Ninh. Trái có kích cỡ lớn, ngoại hình lạ, thịt dai, thơm, hương vị ngọt sắc là đặc điểm nổi trội của mãng cầu Bà Đen. "
        },
        {
            id: 3,
            name: 'Thanh Long Bình Thuận', 
            image: 'thanh-long.jpg', price: 65000, 
            quantity: 1, 
            desc: "Thanh long Bình Thuận nổi tiếng ngọt thơm, ít hạt, trái có kích cỡ lớn, ngoại hình đẹp"
        },
        {
            id: 4,
            name: 'Xoài Cát Hòa Lộc', 
            image: 'Xoai_cat_hoa_loc.jpg', price: 75000,  
            quantity: 1, 
            desc: "Xoài Cát Hòa Lộc là một loại xoài nổi tiếng có xuất xứ từ xã Hòa Lộc, huyện Giáo Đức, Định Tường (nay đã đổi thành xã Hòa Hưng, H. Cái Bè, Tiền Giang). Xoài có thịt dẻo, mịn, thịt dày, ít xơ, mềm, ăn rất thanh mát, có mùi vị đặc trưng quyến rũ. Mỗi trái xoài rất to, cầm nặng tay và có thể nặng từ 450 - 600g. Quả xoài khi còn xanh thì vỏ có màu xanh ngọc, trên cuống có những đốm nhỏ li ti. Khi quả chín thì có màu vàng chanh, xung quanh trái là một lớp phấn mỏng, trên cuống cũng có những chấm đen li ti."
        },
    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;