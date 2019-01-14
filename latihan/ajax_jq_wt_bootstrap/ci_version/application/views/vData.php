<!DOCTYPE html>
<html lang="en">
	<head>
		<title><?=$judul?></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</head>
	<body>
		<header>
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <a class="navbar-brand" href="<?=site_url()?>">CI Tutorial</a>
			    </div>
			    <ul class="nav navbar-nav">
			      <li class="dropdown active">
			        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tabel
			        <span class="caret"></span></a>
			        <ul class="dropdown-menu">
			          <li class="active"><a href="<?=site_url('awal/datanya/')?>">Tabel Tp</a></li>
			          <li><a href="<?=site_url('awal/datanya2/')?>">Tabel rowspan Tp</a></li>
			        </ul>
			      </li>
			      <li><a href="<?=site_url('crud/')?>">Crud</a></li>
			    </ul>
			  </div>
			</nav>
		</header>
		<div class="container">
			<h3 class="text-center"><?=$judul?></h3>
			<div class="row">
				<div class="col-xs-12">
					<div class="panel panel-default">
						<div class="panel-body">
							<div class="row">
								<div class="col-lg-9 col-xs-8">
									<input type="text" name="mencari" class="form-control" placeholder="Cari disini..">
								</div>
								<div class="col-lg-3 col-xs-4">
									<select name="gender" class="form-control">
										<option value="">Pilih Jenis Kelamin</option>
										<option value="1">Laki-laki</option>
										<option value="2">Perempuan</option>
										<option value="3">Lainnya</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div class="panel panel-default">
						<div class="panel-heading">List Data
						</div>
						<div class="panel-body">
							<div class="table-responsive">
								<table class="table" cellspacing="0" style="width:100%">
									<thead>
										<tr>
											<th width="5%">No</th>
											<th width="35%">Nama</th>
											<th width="30%">Email</th>
											<th width="20%">Tipe</th>
											<th width="10%">Kelamin</th>
										</tr>
									</thead>
								<tbody class="datanya"></tbody>
								<tfoot>
								<tr>
									<th colspan="5" class="text-center jumlah-datanya"></th>
								</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="<?=base_url('assets/custom_js/datanya.js')?>"></script>
</body>
</html>