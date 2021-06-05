/* eslint-disable */
export default {
  setMenu(state, payload) {
    switch (payload) {
      case (payload = 1): // school admin
        state.menus = [
          'Umum',
          [
            {
              to: '/school-admin/dashboard',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Pengguna & Grup',
          [
            {
              to: '/school-admin/teller',
              label: 'Bendahara',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/school-admin/student',
              label: 'Siswa',
              icon: 'square-edit-outline',
              updateMark: false,
            },
            {
              to: '/school-admin/group',
              label: 'Grup Siswa',
              icon: 'account-circle',
              updateMark: false,
            },
          ],
          'Keuangan & Laporan',
          [
            {
              to: '/school-admin/finance',
              label: 'Keuangan',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/school-admin/report',
              label: 'Laporan',
              icon: 'table',
              updateMark: false,
            },
          ],
          'Pengaturan',
          [
            {
              to: '/school-admin/setting/school-profile',
              label: 'Profil Sekolah',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/school-admin/setting/invoice',
              label: 'Faktur',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/school-admin/setting/user-account',
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
              to: '/school-teller/dashboard',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Transaksi & Laporan',
          [
            {
              to: '/school-teller/transaction',
              label: 'Transaksi',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/school-teller/report',
              label: 'Laporan',
              icon: 'table',
              updateMark: false,
            },
          ],
          'Pengaturan',
          [
            {
              to: '/school-teller/user-profile',
              label: 'Profil',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/school-teller/user-account',
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
              to: '/student/dashboard',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Pembayaran',
          [
            {
              to: '/student/invoice',
              label: 'Tagihan',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/student/transaction-history',
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
              to: '/parent/dashboard',
              icon: 'desktop-mac',
              label: 'Beranda',
              updateMark: false,
            },
          ],
          'Pembayaran',
          [
            {
              to: '/parent/invoice',
              label: 'Tagihan',
              icon: 'table',
              updateMark: false,
            },
            {
              to: '/parent/transaction-history',
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
