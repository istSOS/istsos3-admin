.. _state:

=================
Application state
=================

.. code-block:: json

    {
        "observableproperties": {
            "isFetching": false,
            "data": [
                {
                    "def": "urn:ogc:def:parameter:x-istsos:1.0:time:iso8601",
                    "name": "Sampling time",
                    "description": "",
                    "type": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_TemporalObservation",
                },
                {
                    "def": "urn:ogc:def:parameter:x-istsos:1.0:meteo:air:temperature",
                    "name": "Air temperature",
                    "description": "",
                    "type": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement",
                },
                {
                    "def": "urn:ogc:def:parameter:x-istsos:1.0:meteo:air:temperature:qualityIndex",
                    "name": "Air temperature quality index",
                    "description": "",
                    "type": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CountObservation",
                }
            ]
        },
        "insertsensor": {
            "wizardPage": 1,
            "sensorType": "2",
            "observationType": "1",
            "resultTypes": ["1", "2"],
            "sensor": {},
            "sensorTypes": {
                "1": {
                    "name": "Insitu Fixed",
                    "icon": "/images/st/1.jpg"
                },
                "2": {
                    "name": "Insitu Mobile",
                    "icon": "/images/st/2.jpg"
                }
            },
            "observationTypes": {
                "1": {
                    "name": "Single Observation in Time",
                    "icon": "/images/st/1.jpg"
                },
                "2": {
                    "name": "Multiple Observation in Time",
                    "icon": "/images/st/2.jpg"
                }
            },
            "resultTypes": {
                "1": {
                    "name": "Decimal",
                    "icon": "/images/rt/1.jpg"
                },
                "2": {
                    "name": "Integer",
                    "icon": "/images/rt/2.jpg"
                }
            }
        }
    }
