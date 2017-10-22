require "nokogiri"
require "open-uri"
url = "https://speakerdeck.com/#{params['username']}"
document = Nokogiri::HTML(open(url))
{
  :talks => document.css('.talks').tr("\n","").strip.to_html,
  :bio => document.css('.bio_mugshot').tr("\n","").strip.to_html
}
