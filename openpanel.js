    // Fungsi untuk menampilkan pane yang diinginkan dan menyembunyikan yang lainnya
    function openPanel(panel) {
        document.getElementById('panelContent1').style.display = 'none';
        document.getElementById('panelContent2').style.display = 'none';
        document.getElementById('panelContent3').style.display = 'none';
        document.getElementById('panelContent4').style.display = 'none';
        document.getElementById('panelContent5').style.display = 'none';
        document.getElementById('panelContent6').style.display = 'none';

        document.getElementById('panel1').classList.remove('border-b-2', 'border-blue-500');
        document.getElementById('panel2').classList.remove('border-b-2', 'border-blue-500');
        document.getElementById('panel3').classList.remove('border-b-2', 'border-blue-500');
        document.getElementById('panel4').classList.remove('border-b-2', 'border-blue-500');
        document.getElementById('panel5').classList.remove('border-b-2', 'border-blue-500');
        document.getElementById('panel6').classList.remove('border-b-2', 'border-blue-500');

        if (panel === 1) {
            document.getElementById('panelContent1').style.display = 'block';
            document.getElementById('panel1').classList.add('border-b-2', 'border-blue-500');
        } else if (panel === 2) {
            document.getElementById('panelContent2').style.display = 'block';
            document.getElementById('panel2').classList.add('border-b-2', 'border-blue-500');
        } else if (panel === 3) {
            document.getElementById('panelContent3').style.display = 'block';
            document.getElementById('panel3').classList.add('border-b-2', 'border-blue-500');
        } else if (panel === 4) {
            document.getElementById('panelContent4').style.display = 'block';
            document.getElementById('panel4').classList.add('border-b-2', 'border-blue-500');
        }else if (panel === 5) {
            document.getElementById('panelContent5').style.display = 'block';
            document.getElementById('panel5').classList.add('border-b-2', 'border-blue-500');
        }else if (panel === 6) {
            document.getElementById('panelContent6').style.display = 'block';
            document.getElementById('panel6').classList.add('border-b-2', 'border-blue-500');
        }
    }