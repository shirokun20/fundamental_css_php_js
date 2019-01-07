<?php
$tinggi = 120;
$jari   = 14;
$phi    = 3.14;
$mantap = '<table>';
$b      = 1;
for ($i = 0; $i <= 9; $i++) {
    $a     = 5 * $i;
    $hasil = '<tr>';
    $hasil .= '<td>Tinggi = ' . ($tinggi + $a) . ' Cm</td>';
    $hasil .= '<td>Jari Jari = ' . ($jari) . ' Cm</td>';
    $hasil .= '<td>Hasil volume ke ' . $b++ . '</td>';
    $hasil .= '<td>:</td>';
    $hasil .= '<td>' . ($phi * $jari * $jari * ($tinggi + $a)) . ' Cm³</td>';
    $hasil .= '</tr>';
    $mantap .= $hasil;
}
$mantap .= '</table>';
echo $mantap;
