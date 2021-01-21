export function locationContainsPath(location: Location, path: string): boolean {
  return location.href.indexOf(`${location.origin}/${path}`) !== -1;
}
