
class Setting {
    constructor(){
        this._ogc_def = "http://www.opengis.net/def/";
        this._ogc_nil = this._ogc_def + "nil/OGC/0/unknown";
        this._foidef = this._ogc_def + "samplingFeatureType/OGC-OM/2.0/";
        this._typedef = this._ogc_def + "observationType/OGC-OM/2.0/";

        // Sampling Types
        this._SAMPLING_CURVE = this._foidef + "SF_SamplingCurve"
        this._SAMPLING_POINT = this._foidef + "SF_SamplingPoint";
        this._SAMPLING_SOLID = this._foidef + "SF_SamplingSolid";
        this._SAMPLING_SURFACE = this._foidef + "SF_SamplingSurface";
        this._SAMPLING_SPATIAL_FEATURE = this._foidef + "SF_SpatialSamplingFeature";
        this._SAMPLING_SPECIMEN = this._foidef + "SF_Specimen";

        // Observation Types
        this._COMPLEX_OBSERVATION = this._typedef + "OM_ComplexObservation";
    }
}

export const setting = new Setting();
