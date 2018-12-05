import React from 'react';

const poliRujukan = {
    1: 'Poli Penyakit Dalam',
    2: 'Poli Mata',
    3: 'Poli Saraf',
    4: 'Poli THT',
    5: 'Poli Gigi dan Mulut',
    6: 'Poli Konsultasi Gizi',
    7: 'Poli Fisioterapi',
    8: 'Poli Penyakit Dalam'
}

const statusPasien = {
    1: 'Mendaftar di IGD',
    2: 'Berada di IGD',
    3: 'Selesai di IGD',
    4: 'Mendaftar di Rawat Inap',
    5: 'Berada di Rawat Inap',
    6: 'Selesai di Rawat Inap',
    7: 'Mendaftar di Rawat Jalan',
    8: 'Berada di Rawat Jalan',
    9: 'Selesai di Rawat Jalan'
}

export const FormAddLabResult = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Lab Result</h2>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis"/>
            </div>
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil"/>
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan"/>
            </div>
            <button className="btn btn-success" value="submit">Add</button>
        </form>
    )
}