export default {
  setAdmin(state) {
    state.user = {
      id: 1,
      username: 'budi.s',
      email: 'budi.s@gmail.com',
      avatar_url: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
      phone: '08123456789',
      full_name: 'Budi Sudarsono, S. Pd.',
      id_numb: '1122334455',
      level: 1,
      level_text: 'Admin Sekolah',
      is_deleted: false,
      school: {
        id: 1,
        name: 'MA Pesantren Pembangunan Majenang',
        level: 5,
        level_text: 'SMA Sederajat',
        type: 1,
        type_text: 'Madrasah Aliyah',
        school_status: 2,
        school_status_text: 'Swasta',
        address: {
          street: 'Jalan KH Sufyan Tsauri',
          village: {
            id: 1,
            name: 'Cibeunying',
          },
          district: {
            id: 1,
            name: 'Majenang',
          },
          city: {
            id: 1,
            name: 'Kab. Cilacap',
          },
          province: {
            id: 1,
            name: 'Jawa Tengah',
          },
        },
      },
    }
  },
  setTeller(state) {
    state.user = {
      id: 2,
      username: 'tio.r',
      email: 'tio.r@gmail.com',
      avatar_url: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
      phone: '08123456789',
      full_name: 'Tio Ramdhani, S. Pd.',
      id_numb: '6677889900',
      level: 2,
      level_text: 'Bendahara Loket',
      is_deleted: false,
      school: {
        id: 1,
        name: 'MA Pesantren Pembangunan Majenang',
        level: 5,
        level_text: 'SMA Sederajat',
        type: 1,
        type_text: 'Madrasah Aliyah',
        school_status: 2,
        school_status_text: 'Swasta',
        address: {
          street: 'Jalan KH Sufyan Tsauri',
          village: {
            id: 1,
            name: 'Cibeunying',
          },
          district: {
            id: 1,
            name: 'Majenang',
          },
          city: {
            id: 1,
            name: 'Kab. Cilacap',
          },
          province: {
            id: 1,
            name: 'Jawa Tengah',
          },
        },
      },
    }
  },
  setStudent(state) {
    state.user = {
      id: 3,
      username: 'yuli.c',
      email: 'yuli.c@gmail.com',
      avatar_url: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
      phone: '08123456789',
      full_name: 'Yuli Cahyani',
      id_numb: '1234567890',
      level: 3,
      level_text: 'Siswa',
      is_deleted: false,
      school: {
        id: 1,
        name: 'MA Pesantren Pembangunan Majenang',
        level: 5,
        level_text: 'SMA Sederajat',
        type: 1,
        type_text: 'Madrasah Aliyah',
        school_status: 2,
        school_status_text: 'Swasta',
        address: {
          street: 'Jalan KH Sufyan Tsauri',
          village: {
            id: 1,
            name: 'Cibeunying',
          },
          district: {
            id: 1,
            name: 'Majenang',
          },
          city: {
            id: 1,
            name: 'Kab. Cilacap',
          },
          province: {
            id: 1,
            name: 'Jawa Tengah',
          },
        },
      },
    }
  },
  setParent(state) {
    state.user = {
      id: 4,
      username: 'logat.a',
      email: 'logat.a@gmail.com',
      avatar_url: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
      phone: '08123456789',
      full_name: 'Logat Adi Widodo',
      id_numb: '1234567890',
      level: 4,
      level_text: 'Parent',
      is_deleted: false,
      student: {
        id: 3,
        username: 'yuli.c',
        email: 'yuli.c@gmail.com',
        avatar_url: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
        phone: '08123456789',
        full_name: 'Yuli Cahyani',
        id_numb: '1234567890',
        level: 3,
        level_text: 'Siswa',
        is_deleted: false,
      },
      school: {
        id: 1,
        name: 'MA Pesantren Pembangunan Majenang',
        level: 5,
        level_text: 'SMA Sederajat',
        type: 1,
        type_text: 'Madrasah Aliyah',
        school_status: 2,
        school_status_text: 'Swasta',
        address: {
          street: 'Jalan KH Sufyan Tsauri',
          village: {
            id: 1,
            name: 'Cibeunying',
          },
          district: {
            id: 1,
            name: 'Majenang',
          },
          city: {
            id: 1,
            name: 'Kab. Cilacap',
          },
          province: {
            id: 1,
            name: 'Jawa Tengah',
          },
        },
      },
    }
  },
}
