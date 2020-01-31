from geopy.geocoders import Nominatim

def gps_from_address(address):
    geo_locator = Nominatim(user_agent="PLERC")
    location = geo_locator.geocode(address)
    return location.longitude, location.latitude

def address_from_gps(latitude, longitude):
    geo_locator = Nominatim(user_agent="PLERC")
    location = geo_locator.reverse(str(latitude) + ", " + str(longitude))
    return location.address

