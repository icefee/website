const NEWS = [
    {
        id: 10000,
        thumb: '/news_thumb.png',
        title: '公司新闻标题',
        description: '新闻描述',
        update: '2021-08-09 12:00:12'
    }
];

export { NEWS as news }

export default function handler(req, res) {
    let _news = [...NEWS];
    const { page_index, page_size } = req.query;
    if ([page_index, page_size].every(d => d != undefined)) {
        _news = _news.splice(page_index, page_size)
    }
    res.status(200).json({ total: NEWS.length, rows: _news })
}
