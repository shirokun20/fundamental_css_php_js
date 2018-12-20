// form nya
var fw = $('form.form-waw');
// nama lengkap 
var full_name = $('[name="full_name"]');
// Email
var email = $('[name="email"]');
// password
var password = $('[name="password"]');
// repassword
var repassword = $('[name="repassword"]');
// phone
var phone = $('[name="phone"]');
// photo
var photo = $('[name="photo"]');
// gender
var gender = $('[name="gender"]');
// license_plat
var license_plat = $('[name="license_plat"]');
// vehicle_brand
var vehicle_brand = $('[name="vehicle_brand"]');
// vehicle_type
var vehicle_type = $('[name="vehicle_type"]');
// vehicle_color
var vehicle_color = $('[name="vehicle_color"]');
// sim
var sim = $('[name="sim"]');
// wajibwe
var wajibwe = $('[name="wajibwe"]');
$(() => {
    fw.on('submit', (e) => {
        return false;
    });
    checking();
});
var checking = (e) => {
    bootstrapValidate('#full_name', 'required:Nama lengkap harus diisi!');
    bootstrapValidate('#password', 'required:Password harus diisi!');
    bootstrapValidate('#repassword', 'required:Repassword harus diisi!');
    bootstrapValidate('#repassword', 'matches:#password:Repassword harus sama dengan password!');
    bootstrapValidate('#email', 'email:Email tidak valid!');
    bootstrapValidate('#email', 'required:Email harus diisi!');
    bootstrapValidate('#phone', 'required:Nomor telepon harus diisi!');
    bootstrapValidate('#photo', 'required:Photo harus pilih!');
    bootstrapValidate('#gender', 'required:Jenis kelamin harus pilih!');
    bootstrapValidate('#sim', 'required:SIM harus pilih!');
    bootstrapValidate('#license_plat', 'required:Plat nomor harus diisi!');
    bootstrapValidate('#vehicle_brand', 'required:Merk kendaraan harus diisi!');
    bootstrapValidate('#vehicle_type', 'required:Tipe kendaraan harus diisi!');
    bootstrapValidate('#vehicle_color', 'required:Warna kendaraan harus diisi!');
    bootstrapValidate('#customCheck', 'required:Harus dicentang!');
}