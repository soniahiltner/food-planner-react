export default function formatText(text) {
  const regex = /(\[.*?\])|(:\d+.\d+)/g
  return text.replace(regex, '')
}