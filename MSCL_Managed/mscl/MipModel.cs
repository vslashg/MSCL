//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class MipModel : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal MipModel(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(MipModel obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~MipModel() {
    Dispose(false);
  }

  public void Dispose() {
    Dispose(true);
    global::System.GC.SuppressFinalize(this);
  }

  protected virtual void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_MipModel(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public static MipModel mip_model_none {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_none_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_dh3 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_dh3_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx3_15 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx3_15_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx3_25 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx3_25_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx3_35 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx3_35_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx3_45 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx3_45_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_rq1_45_lt {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_rq1_45_lt_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_rq1_45_st {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_rq1_45_st_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx4_15 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx4_15_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx4_25 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx4_25_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx4_45 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx4_45_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_mv5_ar {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_mv5_ar_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx5_10 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx5_10_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx5_15 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx5_15_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx5_25 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx5_25_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx5_35 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx5_35_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gx5_45 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gx5_45_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cv5_10 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cv5_10_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cv5_15 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cv5_15_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cv5_25 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cv5_25_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cv5_45 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cv5_45_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gq4_45 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gq4_45_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cx5_45 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cx5_45_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cx5_35 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cx5_35_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cx5_25 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cx5_25_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cx5_15 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cx5_15_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cx5_10 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cx5_10_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cl5_15 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cl5_15_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cl5_25 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cl5_25_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gq7 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gq7_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_rtk_v1 {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_rtk_v1_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_rtk {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_rtk_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cv7_ahrs {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cv7_ahrs_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cv7_ar {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cv7_ar_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gv7_ahrs {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gv7_ahrs_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gv7_ar {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gv7_ar_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_gv7_ins {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_gv7_ins_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public static MipModel mip_model_3dm_cv7_ins {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.MipModel_mip_model_3dm_cv7_ins_get();
      MipModel ret = (cPtr == global::System.IntPtr.Zero) ? null : new MipModel(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public MipModel(string modelNumberStr) : this(msclPINVOKE.new_MipModel__SWIG_0(modelNumberStr), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipModel(MipModel copy) : this(msclPINVOKE.new_MipModel__SWIG_1(MipModel.getCPtr(copy)), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public bool equals(MipModel compare) {
    bool ret = msclPINVOKE.MipModel_equals(swigCPtr, MipModel.getCPtr(compare));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public override string ToString() {
    string ret = msclPINVOKE.MipModel_ToString(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public MipModels.NodeModel nodeModel() {
    MipModels.NodeModel ret = (MipModels.NodeModel)msclPINVOKE.MipModel_nodeModel(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public uint modifier() {
    uint ret = msclPINVOKE.MipModel_modifier(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public MipModels.ModelNumber modelNumber() {
    MipModels.ModelNumber ret = (MipModels.ModelNumber)msclPINVOKE.MipModel_modelNumber(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public virtual MipModel baseModel() {
    MipModel ret = new MipModel(msclPINVOKE.MipModel_baseModel(swigCPtr), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

}

}
