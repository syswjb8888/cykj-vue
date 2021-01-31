<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">

      <el-form-item label="商户编码" prop="merchCode">
        <el-input
          v-model="queryParams.merchCode"
          placeholder="请输入商户编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商户全称" prop="merchName">
        <el-input
          v-model="queryParams.merchName"
          placeholder="请输入商户全称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商户简称" prop="merchAbbr">
        <el-input
          v-model="queryParams.merchAbbr"
          placeholder="请输入商户简称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所属区域" prop="merchRegion">
        <el-input
          v-model="queryParams.merchRegion"
          placeholder="请输入所属区域"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="详细地址" prop="merchAddr">
        <el-input
          v-model="queryParams.merchAddr"
          placeholder="请输入详细地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>

      <el-form-item label="商户类型" prop="merchType">
        <el-select v-model="queryParams.merchType" placeholder="请选择商户类型" clearable size="small">
          <el-option
            v-for="dict in merchTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
<!--      <el-form-item label="审核状态" prop="verifyStatus">-->
<!--        <el-select v-model="queryParams.verifyStatus" placeholder="请选择审核状态" clearable size="small">-->
<!--          <el-option-->
<!--            v-for="dict in verifyStatusOptions"-->
<!--            :key="dict.dictValue"-->
<!--            :label="dict.dictLabel"-->
<!--            :value="dict.dictValue"-->
<!--          />-->
<!--        </el-select>-->
<!--      </el-form-item>-->

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="primary"-->
<!--		  plain-->
<!--          icon="el-icon-plus"-->
<!--          size="mini"-->
<!--          @click="handleAdd"-->
<!--          v-hasPermi="['merchant:merchant:add']"-->
<!--        >新增</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="success"-->
<!--		  plain-->
<!--          icon="el-icon-edit"-->
<!--          size="mini"-->
<!--          :disabled="single"-->
<!--          @click="handleUpdate"-->
<!--          v-hasPermi="['merchant:merchant:edit']"-->
<!--        >修改</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="danger"-->
<!--		  plain-->
<!--          icon="el-icon-delete"-->
<!--          size="mini"-->
<!--          :disabled="multiple"-->
<!--          @click="handleDelete"-->
<!--          v-hasPermi="['merchant:merchant:remove']"-->
<!--        >删除</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="warning"-->
<!--		  plain-->
<!--          icon="el-icon-download"-->
<!--          size="mini"-->
<!--          @click="handleExport"-->
<!--          v-hasPermi="['merchant:merchant:export']"-->
<!--        >导出</el-button>-->
<!--      </el-col>-->
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="merchantList" row-key="merchId"
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <!--@selection-change="handleSelectionChange" -->
<!--      <el-table-column type="selection" width="55" align="center" />-->
     <el-table-column label="商户主键" align="center" prop="merchId" v-if="false"/>
      <el-table-column label="关联登录用户" align="center" prop="userId" v-if="false"/>
      <el-table-column label="上级商户" align="center" prop="parentId" v-if="false"/>
      <el-table-column label="商户全称" align="center" prop="merchName" />
      <el-table-column label="商户编码" align="center" prop="merchCode" />
      <el-table-column label="商户简称" align="center" prop="merchAbbr" />
      <el-table-column label="所属区域" align="center" prop="merchRegion" />
      <el-table-column label="详细地址" align="center" prop="merchAddr" />
      <el-table-column label="经营范围" align="center" prop="merchBizScope" :formatter="merchBizScopeFormat" />
      <el-table-column label="商户类型" align="center" prop="merchType" :formatter="merchTypeFormat" />
<!--      <el-table-column label="审核状态" align="center" prop="verifyStatus" :formatter="verifyStatusFormat" />-->
<!--      <el-table-column label="审核驳回原因" align="center" prop="verifyResult" />-->
<!--      <el-table-column label="审核驳回原因" align="center" prop="var1" />-->
<!--      <el-table-column label="审核驳回原因" align="center" prop="var2" />-->
<!--      <el-table-column label="审核驳回原因" align="center" prop="var3" />-->
<!--      <el-table-column label="审核驳回原因" align="center" prop="var4" />-->
<!--      <el-table-column label="审核驳回原因" align="center" prop="var5" />-->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['merchant:merchant:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['merchant:merchant:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改报件商户信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="关联用户" prop="userId" v-if="false">
          <el-input v-model="form.userId" placeholder="请选择关联用户" />
        </el-form-item>
        <el-form-item label="上级商户" prop="parentId" v-if="false">
          <el-input v-model="form.parentId" placeholder="请选择上级商户" />
        </el-form-item>
        <el-form-item label="商户编码" prop="merchCode">
          <el-input v-model="form.merchCode" readonly/>
        </el-form-item>
        <el-form-item label="商户全称" prop="merchName">
          <el-input v-model="form.merchName" placeholder="请输入商户全称" />
        </el-form-item>
        <el-form-item label="商户简称" prop="merchAbbr">
          <el-input v-model="form.merchAbbr" placeholder="请输入商户简称" />
        </el-form-item>
        <el-form-item label="商户所属区域" prop="merchRegion">
          <el-input v-model="form.merchRegion" placeholder="请输入商户所属区域" />
        </el-form-item>
        <el-form-item label="商户详细地址" prop="merchAddr">
          <el-input v-model="form.merchAddr" placeholder="请输入商户详细地址" />
        </el-form-item>
        <el-form-item label="经营范围" prop="merchBizScope">
          <el-select v-model="form.merchBizScope" placeholder="请选择经营范围">
            <el-option
              v-for="dict in merchBizScopeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商户类型" prop="merchType">
          <el-select v-model="form.merchType" placeholder="请选择商户类型">
            <el-option
              v-for="dict in merchTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
<!--        <el-form-item label="审核状态">-->
<!--          <el-radio-group v-model="form.verifyStatus">-->
<!--            <el-radio-->
<!--              v-for="dict in verifyStatusOptions"-->
<!--              :key="dict.dictValue"-->
<!--              :label="dict.dictValue"-->
<!--            >{{dict.dictLabel}}</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="审核驳回原因" prop="verifyResult">-->
<!--          <el-input v-model="form.verifyResult" placeholder="请输入审核驳回原因" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="审核驳回原因" prop="var1">-->
<!--          <el-input v-model="form.var1" placeholder="请输入审核驳回原因" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="审核驳回原因" prop="var2">-->
<!--          <el-input v-model="form.var2" placeholder="请输入审核驳回原因" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="审核驳回原因" prop="var3">-->
<!--          <el-input v-model="form.var3" placeholder="请输入审核驳回原因" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="审核驳回原因" prop="var4">-->
<!--          <el-input v-model="form.var4" placeholder="请输入审核驳回原因" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="审核驳回原因" prop="var5">-->
<!--          <el-input v-model="form.var5" placeholder="请输入审核驳回原因" />-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listMerchant, getMerchant, delMerchant, addMerchant, updateMerchant, exportMerchant } from "@/api/merchant/merchant";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "Merchant",
  components: { Treeselect },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 报件商户信息表格数据
      merchantList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 经营范围字典
      merchBizScopeOptions: [],
      // 商户类型字典
      merchTypeOptions: [],
      // 审核状态字典
      verifyStatusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: undefined,
        parentId: undefined,
        merchCode: undefined,
        merchName: undefined,
        merchAbbr: undefined,
        merchRegion: undefined,
        merchAddr: undefined,
        merchBizScope: undefined,
        merchType: undefined,
        verifyStatus: undefined,
        verifyResult: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        userId: [
          { required: true, message: "关联登录用户主键不能为空", trigger: "blur" }
        ],
        parentId: [
          { required: true, message: "上级商户主键不能为空", trigger: "blur" }
        ],
        merchCode: [
          { required: true, message: "系统自定义商户编码不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("biz_scope_type").then(response => {
      this.merchBizScopeOptions = response.data;
    });
    this.getDicts("merchant_type").then(response => {
      this.merchTypeOptions = response.data;
    });
    this.getDicts("merchant_verify_status").then(response => {
      this.verifyStatusOptions = response.data;
    });
  },
  methods: {
    /** 查询报件商户信息列表 */
    getList() {
      this.loading = true;
      listMerchant(this.queryParams).then(response => {
        this.merchantList = this.handleTree(response.rows, "merchId");
        this.total = response.total;
        this.loading = false;
      });
    },
    // 经营范围字典翻译
    merchBizScopeFormat(row, column) {
      return this.selectDictLabel(this.merchBizScopeOptions, row.merchBizScope);
    },
    // 商户类型字典翻译
    merchTypeFormat(row, column) {
      return this.selectDictLabel(this.merchTypeOptions, row.merchType);
    },
    // 审核状态字典翻译
    verifyStatusFormat(row, column) {
      return this.selectDictLabel(this.verifyStatusOptions, row.verifyStatus);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        merchId: undefined,
        userId: undefined,
        parentId: undefined,
        merchCode: undefined,
        merchName: undefined,
        merchAbbr: undefined,
        merchRegion: undefined,
        merchAddr: undefined,
        merchBizScope: undefined,
        merchType: undefined,
        verifyStatus: "0",
        verifyResult: undefined,
        createBy: undefined,
        createTime: undefined,
        updateBy: undefined,
        updateTime: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.merchId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加报件商户信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const merchId = row.merchId || this.ids
      getMerchant(merchId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改报件商户信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.merchId != null) {
            updateMerchant(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addMerchant(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const merchIds = row.merchId || this.ids;
      this.$confirm('是否确认删除报件商户信息编号为"' + merchIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delMerchant(merchIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有报件商户信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportMerchant(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
