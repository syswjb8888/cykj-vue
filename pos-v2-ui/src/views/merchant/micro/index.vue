<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="归属登录用户" prop="merchId">
        <el-input
          v-model="queryParams.merchId"
          placeholder="请输入归属登录用户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="结算银行卡开户行" prop="merchBank">
        <el-input
          v-model="queryParams.merchBank"
          placeholder="请输入结算银行卡开户行"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="结算银行卡号" prop="merchBankCardno">
        <el-input
          v-model="queryParams.merchBankCardno"
          placeholder="请输入结算银行卡号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开户行所在城市" prop="merchBankCity">
        <el-input
          v-model="queryParams.merchBankCity"
          placeholder="请输入开户行所在城市"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="银行预留手机号" prop="merchBankMobile">
        <el-input
          v-model="queryParams.merchBankMobile"
          placeholder="请输入银行预留手机号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="银行卡照片" prop="merchBankCard">
        <el-input
          v-model="queryParams.merchBankCard"
          placeholder="请输入银行卡照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="身份证件正面照" prop="merchIdcardPositive">
        <el-input
          v-model="queryParams.merchIdcardPositive"
          placeholder="请输入身份证件正面照"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="身份证件背面照" prop="merchIdcardBack">
        <el-input
          v-model="queryParams.merchIdcardBack"
          placeholder="请输入身份证件背面照"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="身份证件手持照片" prop="merchIdcardHand">
        <el-input
          v-model="queryParams.merchIdcardHand"
          placeholder="请输入身份证件手持照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="身份证件号码" prop="merchIdcard">
        <el-input
          v-model="queryParams.merchIdcard"
          placeholder="请输入身份证件号码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="姓名" prop="merchIdcardName">
        <el-input
          v-model="queryParams.merchIdcardName"
          placeholder="请输入姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="证件到期日" prop="merchIdcardDuedate">
        <el-input
          v-model="queryParams.merchIdcardDuedate"
          placeholder="请输入证件到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="证件到期日" prop="var1">
        <el-input
          v-model="queryParams.var1"
          placeholder="请输入证件到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="证件到期日" prop="var2">
        <el-input
          v-model="queryParams.var2"
          placeholder="请输入证件到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="证件到期日" prop="var3">
        <el-input
          v-model="queryParams.var3"
          placeholder="请输入证件到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="证件到期日" prop="var4">
        <el-input
          v-model="queryParams.var4"
          placeholder="请输入证件到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="证件到期日" prop="var5">
        <el-input
          v-model="queryParams.var5"
          placeholder="请输入证件到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
		  plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['merchant:micro:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
		  plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['merchant:micro:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
		  plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['merchant:micro:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['merchant:micro:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="microList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="商户主键" align="center" prop="microId" v-if="false"/>
      <el-table-column label="归属登录用户" align="center" prop="merchId" />
      <el-table-column label="结算银行卡开户行" align="center" prop="merchBank" />
      <el-table-column label="结算银行卡号" align="center" prop="merchBankCardno" />
      <el-table-column label="开户行所在城市" align="center" prop="merchBankCity" />
      <el-table-column label="银行预留手机号" align="center" prop="merchBankMobile" />
      <el-table-column label="银行卡照片" align="center" prop="merchBankCard" />
      <el-table-column label="身份证件正面照" align="center" prop="merchIdcardPositive" />
      <el-table-column label="身份证件背面照" align="center" prop="merchIdcardBack" />
      <el-table-column label="身份证件手持照片" align="center" prop="merchIdcardHand" />
      <el-table-column label="身份证件号码" align="center" prop="merchIdcard" />
      <el-table-column label="姓名" align="center" prop="merchIdcardName" />
      <el-table-column label="证件到期日" align="center" prop="merchIdcardDuedate" />
      <el-table-column label="证件到期日" align="center" prop="var1" />
      <el-table-column label="证件到期日" align="center" prop="var2" />
      <el-table-column label="证件到期日" align="center" prop="var3" />
      <el-table-column label="证件到期日" align="center" prop="var4" />
      <el-table-column label="证件到期日" align="center" prop="var5" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['merchant:micro:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['merchant:micro:remove']"
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

    <!-- 添加或修改报件小微商户信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="归属登录用户" prop="merchId">
          <el-input v-model="form.merchId" placeholder="请输入归属登录用户" />
        </el-form-item>
        <el-form-item label="结算银行卡开户行" prop="merchBank">
          <el-input v-model="form.merchBank" placeholder="请输入结算银行卡开户行" />
        </el-form-item>
        <el-form-item label="结算银行卡号" prop="merchBankCardno">
          <el-input v-model="form.merchBankCardno" placeholder="请输入结算银行卡号" />
        </el-form-item>
        <el-form-item label="开户行所在城市" prop="merchBankCity">
          <el-input v-model="form.merchBankCity" placeholder="请输入开户行所在城市" />
        </el-form-item>
        <el-form-item label="银行预留手机号" prop="merchBankMobile">
          <el-input v-model="form.merchBankMobile" placeholder="请输入银行预留手机号" />
        </el-form-item>
        <el-form-item label="银行卡照片" prop="merchBankCard">
          <el-input v-model="form.merchBankCard" placeholder="请输入银行卡照片" />
        </el-form-item>
        <el-form-item label="身份证件正面照" prop="merchIdcardPositive">
          <el-input v-model="form.merchIdcardPositive" placeholder="请输入身份证件正面照" />
        </el-form-item>
        <el-form-item label="身份证件背面照" prop="merchIdcardBack">
          <el-input v-model="form.merchIdcardBack" placeholder="请输入身份证件背面照" />
        </el-form-item>
        <el-form-item label="身份证件手持照片" prop="merchIdcardHand">
          <el-input v-model="form.merchIdcardHand" placeholder="请输入身份证件手持照片" />
        </el-form-item>
        <el-form-item label="身份证件号码" prop="merchIdcard">
          <el-input v-model="form.merchIdcard" placeholder="请输入身份证件号码" />
        </el-form-item>
        <el-form-item label="姓名" prop="merchIdcardName">
          <el-input v-model="form.merchIdcardName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="证件到期日" prop="merchIdcardDuedate">
          <el-input v-model="form.merchIdcardDuedate" placeholder="请输入证件到期日" />
        </el-form-item>
        <el-form-item label="证件到期日" prop="var1">
          <el-input v-model="form.var1" placeholder="请输入证件到期日" />
        </el-form-item>
        <el-form-item label="证件到期日" prop="var2">
          <el-input v-model="form.var2" placeholder="请输入证件到期日" />
        </el-form-item>
        <el-form-item label="证件到期日" prop="var3">
          <el-input v-model="form.var3" placeholder="请输入证件到期日" />
        </el-form-item>
        <el-form-item label="证件到期日" prop="var4">
          <el-input v-model="form.var4" placeholder="请输入证件到期日" />
        </el-form-item>
        <el-form-item label="证件到期日" prop="var5">
          <el-input v-model="form.var5" placeholder="请输入证件到期日" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listMicro, getMicro, delMicro, addMicro, updateMicro, exportMicro } from "@/api/merchant/micro";

export default {
  name: "Micro",
  components: {
  },
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
      // 报件小微商户信息表格数据
      microList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        merchId: undefined,
        merchBank: undefined,
        merchBankCardno: undefined,
        merchBankCity: undefined,
        merchBankMobile: undefined,
        merchBankCard: undefined,
        merchIdcardPositive: undefined,
        merchIdcardBack: undefined,
        merchIdcardHand: undefined,
        merchIdcard: undefined,
        merchIdcardName: undefined,
        merchIdcardDuedate: undefined,
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
        merchId: [
          { required: true, message: "归属登录用户不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询报件小微商户信息列表 */
    getList() {
      this.loading = true;
      listMicro(this.queryParams).then(response => {
        this.microList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        microId: undefined,
        merchId: undefined,
        merchBank: undefined,
        merchBankCardno: undefined,
        merchBankCity: undefined,
        merchBankMobile: undefined,
        merchBankCard: undefined,
        merchIdcardPositive: undefined,
        merchIdcardBack: undefined,
        merchIdcardHand: undefined,
        merchIdcard: undefined,
        merchIdcardName: undefined,
        merchIdcardDuedate: undefined,
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
      this.ids = selection.map(item => item.microId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加报件小微商户信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const microId = row.microId || this.ids
      getMicro(microId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改报件小微商户信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.microId != null) {
            updateMicro(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addMicro(this.form).then(response => {
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
      const microIds = row.microId || this.ids;
      this.$confirm('是否确认删除报件小微商户信息编号为"' + microIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delMicro(microIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有报件小微商户信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportMicro(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
