function rangeConversion(val, inMin, inMax, outMin, outMax) {
    if (val > inMax) val = inMax;
    if (val < inMin) val = inMin;
    return outMin + (((val - inMin) * (outMax - outMin)) / (inMax - inMin));
}
