awk '{
  len = length($0)
  count[len]++
  lines[len] = NR
  urls[len] = $0
}
END {
  for (l in count) {
    if (count[l] == 1) {
      print " URL diferente:", urls[l]
      print " Línea:", lines[l]
    }
  }
}' urls.txt