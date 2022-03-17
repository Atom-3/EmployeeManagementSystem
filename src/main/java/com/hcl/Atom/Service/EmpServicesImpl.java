package com.hcl.Atom.Service;

//public class EmpServicesImpl {

//}

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.hcl.Atom.Model.Employee;
import com.hcl.Atom.Repository.EmpRepository;




@Service
public class EmpServicesImpl implements EmpServices
{
@Autowired
private EmpRepository repository;

public Employee find(int id)
{
Optional<Employee> o=repository.findById(id);

if(o.isPresent())
{
return o.get();
}
return null;
}

public List<Employee> findAll()
{
return repository.findAll();
}

public void save(Employee emp)
{
repository.save(emp);
}

public void delete(int id)
{
Optional<Employee> o = repository.findById(id);

if(o.isPresent())
{
repository.deleteById(id);
}
// else
// {
// throw new StockNotFoundException("stockId: "+id);
// }



}



public void update(Employee emp)
{
System.out.println("In service, from browser: "+emp);
Optional<Employee> o = repository.findById(emp.getId());
System.out.println("In service, from db: "+o.get());
if(o.isPresent())
{
repository.save(emp);
}
// else
// {
// throw new StockNotFoundException("stockId: "+stock.getStockId());
// }
}
}