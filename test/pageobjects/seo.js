
class SEO {

    get canonical()
    {
        return $("link[rel='canonical']")
    }

}
module.exports = new SEO()
