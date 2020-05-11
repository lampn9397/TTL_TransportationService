package com.softech.cms.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.softech.cms.entity.UserRole;
import com.softech.cms.model.Division;
import com.softech.cms.model.User;

@Repository
@Transactional
public class AppRoleDAO {

	@Autowired
	private EntityManager entityManager;

//   public List<String> getRoleNames(Long userId) {
//       String sql = "Select ur.appRole.roleName from " + UserRole.class.getName() + " ur " //
//               + " where ur.appUser.userId = :userId ";
//
//       Query query = this.entityManager.createQuery(sql, String.class);
//       query.setParameter("userId", userId);
//       return query.getResultList();
//   }

	public List<String> getRoleNames(Integer userId) {
//       String sql = "Select u.divisionid.type from " + User.class.getName() + " u " //
//               + " where u.id = :userId ";
		String sql = "SELECT d.type from " + User.class.getName() + " u JOIN u.divisionid d where u.id = :userId";

		Query query = this.entityManager.createQuery(sql, String.class);
		query.setParameter("userId", userId);
		System.out.println("query của approleDAO: "+query.getResultList());
		return query.getResultList();
	}

}