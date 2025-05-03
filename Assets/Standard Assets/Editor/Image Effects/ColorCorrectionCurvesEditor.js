
@script ExecuteInEditMode()

@CustomEditor (ColorCorrectionCurves)
class ColorCorrectionCurvesEditor extends Editor 
{
	public var showShaders : boolean = false;	
		
	function Awake () {

	}
	
	function OnEnable () {
		var colTarget = target as ColorCorrectionCurves;

		if(!colTarget.redChannel)
			colTarget.redChannel = new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0));
		if(!colTarget.greenChannel)
			colTarget.greenChannel = new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0));
		if(!colTarget.blueChannel)
			colTarget.blueChannel = new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0));	

		if(!colTarget.depthRedChannel)
			colTarget.depthRedChannel = new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0));
		if(!colTarget.depthGreenChannel)
			colTarget.depthGreenChannel = new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0));
		if(!colTarget.depthBlueChannel)
			colTarget.depthBlueChannel = new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0));	
			
		if(!colTarget.zCurve)
			colTarget.zCurve = new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0));	
			
		EditorUtility.SetDirty (target);		
	}
    		
    function OnInspectorGUI () 
    {        

		var colTarget = target as ColorCorrectionCurves;

    	colTarget.mode = EditorGUILayout.EnumPopup ("Mode", colTarget.mode, EditorStyles.popup);
    	EditorGUILayout.Separator ();
    	
    	
		EditorGUILayout.BeginHorizontal ();
		
        colTarget.redChannel = EditorGUILayout.CurveField (GUIContent("Red"), colTarget.redChannel, Color.red, Rect(0.0,0.0,1.0,1.0));
        //EditorGUILayout.CurveField (GUIContent("Red"), property, settings );
        
        if (GUILayout.Button ("Reset")) {
        	 colTarget.redChannel = EditorGUILayout.CurveField (GUIContent("Red"), new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0)), Color.red, Rect(0.0,0.0,1.0,1.0));	
        	 colTarget.updateTextures = true;
        	 EditorUtility.SetDirty (target);
        }
        EditorGUILayout.EndHorizontal ();
        
        EditorGUILayout.BeginHorizontal ();
        colTarget.greenChannel = EditorGUILayout.CurveField (GUIContent("Green"), colTarget.greenChannel, Color.green, Rect(0.0,0.0,1.0,1.0));
        if (GUILayout.Button ("Reset")) {
        	 colTarget.greenChannel = EditorGUILayout.CurveField (GUIContent("Green"), new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0)), Color.green, Rect(0.0,0.0,1.0,1.0));	
  			 colTarget.updateTextures = true;  
        	 EditorUtility.SetDirty (target);
        }
        EditorGUILayout.EndHorizontal ();
        
        EditorGUILayout.BeginHorizontal ();
        colTarget.blueChannel = EditorGUILayout.CurveField (GUIContent("Blue"), colTarget.blueChannel, Color.blue, Rect(0.0,0.0,1.0,1.0));
        if (GUILayout.Button ("Reset")) {
        	 colTarget.blueChannel = EditorGUILayout.CurveField (GUIContent("Blue"), new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0)), Color.blue, Rect(0.0,0.0,1.0,1.0));	
        	 colTarget.updateTextures = true;
        	 EditorUtility.SetDirty (target);
        }
        EditorGUILayout.EndHorizontal ();
        
        EditorGUILayout.Separator ();
        
        //target.useDepthCorrection = EditorGUILayout.Toggle ("Depth Correction", target.useDepthCorrection);
        if( colTarget.mode > 0 )
        	colTarget.useDepthCorrection = true;
        else 
        	colTarget.useDepthCorrection = false;
        
        if (colTarget.useDepthCorrection) 
        {
        	EditorGUILayout.Separator ();
	        
	        EditorGUILayout.BeginHorizontal ();
	        colTarget.depthRedChannel = EditorGUILayout.CurveField (GUIContent("Red (Depth)"), colTarget.depthRedChannel, Color.red, Rect(0.0,0.0,1.0,1.0));
	        if (GUILayout.Button ("Reset")) {
	        	 colTarget.depthRedChannel = EditorGUILayout.CurveField (GUIContent("Red (Depth)"), new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0)), Color.red, Rect(0.0,0.0,1.0,1.0));	
	        	 colTarget.updateTextures = true;
	        	 EditorUtility.SetDirty (target);
	        }
	        EditorGUILayout.EndHorizontal ();
	        
	        EditorGUILayout.BeginHorizontal ();
	        colTarget.depthGreenChannel = EditorGUILayout.CurveField (GUIContent("Green (Depth)"), colTarget.depthGreenChannel, Color.green, Rect(0.0,0.0,1.0,1.0));
	        if (GUILayout.Button ("Reset")) {
	        	 colTarget.depthGreenChannel = EditorGUILayout.CurveField (GUIContent("Green (Depth)"), new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0)), Color.green, Rect(0.0,0.0,1.0,1.0));	
	        	 colTarget.updateTextures = true;
	        	 EditorUtility.SetDirty (target);
	        }
	        EditorGUILayout.EndHorizontal ();
	        
	        EditorGUILayout.BeginHorizontal ();
	        colTarget.depthBlueChannel = EditorGUILayout.CurveField (GUIContent("Blue (Depth)"), colTarget.depthBlueChannel, Color.blue, Rect(0.0,0.0,1.0,1.0));
	        if (GUILayout.Button ("Reset")) {
	        	 colTarget.depthBlueChannel = EditorGUILayout.CurveField (GUIContent("Blue (Depth)"), new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0)), Color.blue, Rect(0.0,0.0,1.0,1.0));	
	        	 colTarget.updateTextures = true;
	        	 EditorUtility.SetDirty (target);
	        }  
	        EditorGUILayout.EndHorizontal ();
	        
	        EditorGUILayout.Separator ();
	        
	        EditorGUILayout.BeginHorizontal ();
	        colTarget.zCurve = EditorGUILayout.CurveField (GUIContent("z Curve"), colTarget.zCurve, Color.white, Rect(0.0,0.0,1.0,1.0));
	        if (GUILayout.Button ("Reset")) {
	        	 colTarget.zCurve = EditorGUILayout.CurveField (GUIContent("z Curve"), new AnimationCurve(Keyframe(0, 0.0, 1.0, 1.0), Keyframe(1, 1.0, 1.0, 1.0)), Color.white, Rect(0.0,0.0,1.0,1.0));				
	        	 colTarget.updateTextures = true;
	        	 EditorUtility.SetDirty (target);
	        }          
	        EditorGUILayout.EndHorizontal ();   
        }
        
		EditorGUILayout.Separator ();
		colTarget.selectiveCc = EditorGUILayout.Toggle ("Selective", colTarget.selectiveCc);
        
        if (colTarget.selectiveCc) 
        {
        	colTarget.selectiveFromColor = EditorGUILayout.ColorField("Key color", colTarget.selectiveFromColor);
        	colTarget.selectiveToColor = EditorGUILayout.ColorField("Target color", colTarget.selectiveToColor);
        }            

		EditorGUILayout.Separator ();
		var oldCurveResolution = colTarget.curveResolution;
    	colTarget.curveResolution = EditorGUILayout.IntSlider ("Curve Resolution", colTarget.curveResolution, 8, 256);
        colTarget.curveResolution = Mathf.ClosestPowerOfTwo(colTarget.curveResolution);
    	if (oldCurveResolution != colTarget.curveResolution);
	    	colTarget.recreateTextures = true;

       if (GUI.changed) {
       		colTarget.updateTextures = true;
        	EditorUtility.SetDirty (target);     
       }
       
    }
}
