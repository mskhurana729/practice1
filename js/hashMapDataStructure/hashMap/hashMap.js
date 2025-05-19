class HashMap {
  constructor() {
    this.bs = [[], [], []];
  }
  bucket(key) {
    let h = murmur3(key); //this is the only place in hash map where a hash function is used
    return this.bs[h % this.bs.length];
  }
  entry(bucket, key) {
    for (let e of bucket) {
      if (e.key === key) {
        return e;
      }
    }
    return null;
  }
  set(key, value) {
    let b = this.bucket(key);
    let e = this.entry(b, key);
    if (e) {
      e.value = value;
      return;
    }
    b.push({ key, value });
  }
  get(key) {
    let b = this.bucket(key);
    let e = this.entry(b, key);
    if (e) {
      return e.value;
    }
    return null;
  }
}
