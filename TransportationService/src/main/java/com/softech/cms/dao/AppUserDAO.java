package com.softech.cms.dao;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.softech.cms.entity.AppUser;
import com.softech.cms.model.User;
 
@Repository
@Transactional
public class AppUserDAO {
 
    @Autowired
    private EntityManager entityManager;
 
//    public AppUser findUserAccount(String userName) {
//        try {
//            String sql = "Select e from " + AppUser.class.getName() + " e " //
//                    + " Where e.userName = :userName ";
// 
//            Query query = entityManager.createQuery(sql, AppUser.class);
//            query.setParameter("userName", userName);
// 
//            return (AppUser) query.getSingleResult();
//        } catch (NoResultException e) {
//            return null;
//        }
//    }
    
    public User findUserAccount(String userName) {
        try {
            String sql = "Select e from " + User.class.getName() + " e " //
                    + " Where e.username = :userName ";
 
            Query query = entityManager.createQuery(sql, User.class);
            query.setParameter("userName", userName);
            System.out.println("day la appUserDAO: "+query.getSingleResult());
            return (User) query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
 
}