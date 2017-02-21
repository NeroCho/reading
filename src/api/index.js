// const _baseUrl = 'http://192.168.0.73:809/api/music'
const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic'
//http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit=6
export default {
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl + '?type=topPlayList&cat=' + cat + '&order=' + order + '&offset=' + offset + '&total=' + total + '&limit=' + limit
  },
  getLrc (id) {
    return _baseUrl2 + '?type=lyric&id=' + id
  },
  getSong (id) {
    return _baseUrl2 + '?id=' + id
  },
  getPlayListDetail (id) {
    return _baseUrl2 + '?type=playlist&id=' + id
  },
  getMv (id) {
    return _baseUrl2 + '?type=mv&id=' + id
  },
  search (words) {
    return _baseUrl2 + '?type=search&s=' + words
  }
}
