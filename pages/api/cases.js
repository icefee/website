// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const baseUrl = process.env.NODE_ENV === 'development' ? '' : '/website';

const CASES = [
  {
    category: 0,
    id: 10001,
    title: '电力案例1',
    cover: '/products/2_1/1.png',
  },
  {
    category: 0,
    id: 10002,
    title: '电力案例2',
    cover: '/products/2_1/2.png',
  },
  {
    category: 0,
    id: 10003,
    title: '电力案例3',
    cover: '/products/2_1/3.jpg',
  },
  {
    category: 1,
    id: 10004,
    title: '交通案例1',
    cover: '/products/2_2/1.png',
  },
  {
    category: 1,
    id: 10005,
    title: '交通案例2',
    cover: '/products/2_2/2.png',
  },
  {
    category: 1,
    id: 10006,
    title: '交通案例3',
    cover: '/products/2_2/3.png',
  },
  {
    category: 2,
    id: 10007,
    title: '管廊案例1',
    cover: '/products/2_3/1.png',
  },
  {
    category: 3,
    id: 10008,
    title: '管廊案例1',
    cover: '/products/2_3/2.png',
  }
]; // .map(({ cover, ...rest }) => ({ cover: baseUrl + cover, ...rest }));

export { CASES as cases };

export default function handler(req, res) {
  let _cases = [...CASES];
  const { category } = req.query;
  if (category != undefined && category != '') {
    _cases = _cases.filter(
      d => d.category === parseInt(category)
    )
  }
  res.status(200).json(_cases)
}
