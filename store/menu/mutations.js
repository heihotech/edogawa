/* eslint-disable */
export default {
  setMenu(state, payload) {
    switch (payload) {
      case (payload = 1): // school admin
        state.menus = [
          'Umum',
          [
            {
              to: '/',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Pengguna & Grup',
          [
            {
              to: '/tables',
              label: 'Bendahara',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/forms',
              label: 'Siswa',
              icon: 'square-edit-outline',
              updateMark: false,
            },
            {
              to: '/profile',
              label: 'Grup Siswa',
              icon: 'account-circle',
              updateMark: false,
            },
          ],
          'Keuangan & Laporan',
          [
            {
              to: '/tables',
              label: 'Keuangan',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/tables',
              label: 'Laporan',
              icon: 'table',
              updateMark: false,
            },
          ],
          'Pengaturan',
          [
            {
              to: '/tables',
              label: 'Profil Sekolah',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/tables',
              label: 'Faktur',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/tables',
              label: 'Akun',
              icon: 'table',
              updateMark: false,
            },
          ],
        ]
        break

      case (payload = 2): // teller
        state.menus = [
          'Umum',
          [
            {
              to: '/',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Transaksi & Laporan',
          [
            {
              to: '/tables',
              label: 'Transaksi',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/tables',
              label: 'Laporan',
              icon: 'table',
              updateMark: false,
            },
          ],
          'Pengaturan',
          [
            {
              to: '/tables',
              label: 'Profil',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/tables',
              label: 'Akun',
              icon: 'table',
              updateMark: false,
            },
          ],
        ]
        break

      case (payload = 3): // student
        state.menus = [
          'Umum',
          [
            {
              to: '/',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Pembayaran',
          [
            {
              to: '/tables',
              label: 'Tagihan',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/tables',
              label: 'Riwayat Pembayaran',
              icon: 'table',
              updateMark: false,
            },
          ],
        ]
        break

      case (payload = 4): // parent
        state.menus = [
          'Umum',
          [
            {
              to: '/',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Pembayaran',
          [
            {
              to: '/tables',
              label: 'Tagihan',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/tables',
              label: 'Riwayat Pembayaran',
              icon: 'table',
              updateMark: false,
            },
          ],
        ]
        break

      default:
        state.menus = []
        break
    }
  },
}
