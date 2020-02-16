How to install PLERC?

# Back-end

To run our back-end, you need to have `python3` installed. Check that it is installed by running
```
python3 -V
```
which should return something like:
```
Python 3.7.6
```

Then, you need to install the dependencies:
- Django
- folium
- geopandas
- osmnx

For that we give you a file with all dependencies : _requirements.txt_. You can use pip to import that : 
```
pip install -r requirements.txt --force-reinstall
```

Then you can run by : 
```
cd PLERC
python3 manage.py runserver
```

# Front-end

Our front-end is an Angular server. That is why you need to install Angular as described [here](https://angular.io/cli).

You then need to go in the `PLERC/PLERC-Website` folder and run:

```
ng serve
```

You can now open your web browser and type `http://localhost:4200/` and you should see our interface running.