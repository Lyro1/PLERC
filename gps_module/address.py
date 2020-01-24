from geopy.geocoders import Nominatim

def gps_from_address(address):
    geo_locator = Nominatim()
    location = geo_locator.geocode(address)
    return location.longitude, location.latitude

