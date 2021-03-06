import moment from 'moment';

export const dataSource = [
  {
    key: '1',
    formName: 'Basic Details',
    created: '08 June 2021',
    updated: '08 June 2021'
  },
  {
    key: '2',
    name: 'Contact Details',
    created: '09 June 2021',
    updated: '08 June 2021'
  },
  {
    key: '3',
    name: 'Family Details',
    created: '10 June 2021',
    updated: '08 June 2021'
  },
  {
    key: '4',
    name: 'Educational Details',
    created: '11 June 2021',
    updated: '08 June 2021'
  },
  {
    key: '5',
    name: 'Employment Details',
    created: '12 June 2021',
    updated: '08 June 2021'
  }
];

export const columns = [
  {
    title: 'Form Name',
    dataIndex: 'formName',
    key: 'formName',
    ellipsis: true,
    sorter: (a, b) => a.formName.localeCompare(b.formName)
  },
  {
    title: 'Form Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix()
  },
  {
    title: 'Form Last Updated',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    sorter: (a, b) => moment(a.updatedAt).unix() - moment(b.updatedAt).unix()
  }
];
